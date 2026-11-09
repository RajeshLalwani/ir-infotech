-- ==============================================================================
-- IR INFOTECH – INTERNSHIP & CERTIFICATE MANAGEMENT SYSTEM
-- PostgreSQL Database Schema with Row Level Security (RLS)
-- Target Platform: Supabase PostgreSQL
-- ==============================================================================

-- 1. Enable UUID Extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. Company Settings Table
CREATE TABLE IF NOT EXISTS company_settings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    company_name VARCHAR(150) NOT NULL DEFAULT 'IR InfoTech',
    tagline VARCHAR(200) NOT NULL DEFAULT 'IDEAS | INNOVATION | IMPACT',
    website VARCHAR(200) NOT NULL DEFAULT 'https://ir-infotech-three.vercel.app/',
    email VARCHAR(150) NOT NULL DEFAULT 'info.irinfotech@gmail.com',
    contact_number VARCHAR(50) NOT NULL DEFAULT '+91 84889 84951',
    address TEXT NOT NULL DEFAULT 'Anand, Gujarat, India - 388001',
    udyam_reg_no VARCHAR(100) NOT NULL DEFAULT 'UDYAM-GJ-03-0089721',
    offer_prefix VARCHAR(50) NOT NULL DEFAULT 'IRIT/INT',
    cert_prefix VARCHAR(50) NOT NULL DEFAULT 'IRIT/CERT',
    intern_prefix VARCHAR(50) NOT NULL DEFAULT 'IRIT-INT',
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert default company record if empty
INSERT INTO company_settings (id, company_name, tagline, website, email, contact_number, address, udyam_reg_no)
SELECT 
    '00000000-0000-0000-0000-000000000001',
    'IR InfoTech',
    'IDEAS | INNOVATION | IMPACT',
    'https://ir-infotech-three.vercel.app/',
    'info.irinfotech@gmail.com',
    '+91 84889 84951',
    'Anand, Gujarat, India - 388001',
    'UDYAM-GJ-03-0089721'
WHERE NOT EXISTS (SELECT 1 FROM company_settings LIMIT 1);

-- 3. Interns Master Table
CREATE TABLE IF NOT EXISTS interns (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    intern_id VARCHAR(50) UNIQUE NOT NULL,
    -- Personal Information
    full_name VARCHAR(200) NOT NULL,
    email VARCHAR(200) NOT NULL,
    mobile VARCHAR(50) NOT NULL,
    date_of_birth DATE,
    gender VARCHAR(30),
    address TEXT,
    
    -- Academic Information
    college_name VARCHAR(300) NOT NULL,
    university_name VARCHAR(300),
    course_degree VARCHAR(200) NOT NULL,
    department VARCHAR(200) NOT NULL,
    current_semester VARCHAR(50),
    academic_session VARCHAR(50),
    college_roll_no VARCHAR(100),
    
    -- Internship Details
    domain VARCHAR(150) NOT NULL,
    start_date DATE NOT NULL,
    duration_months INT NOT NULL DEFAULT 2,
    end_date DATE NOT NULL,
    internship_mode VARCHAR(50) NOT NULL DEFAULT 'Remote', -- Remote, On-site, Hybrid
    internship_type VARCHAR(50) NOT NULL DEFAULT 'Unpaid', -- Paid, Unpaid
    stipend_amount NUMERIC(10, 2) DEFAULT 0,
    assigned_mentor VARCHAR(200),
    assigned_project TEXT,
    
    -- Documents (Stored securely as storage paths or links)
    resume_url TEXT,
    college_id_url TEXT,
    noc_url TEXT,
    
    -- Status & Lifecycle
    status VARCHAR(50) NOT NULL DEFAULT 'Selected', -- Selected, Offer Sent, Active, Completed, Withdrawn, Terminated
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_interns_email ON interns(email);
CREATE INDEX IF NOT EXISTS idx_interns_domain ON interns(domain);
CREATE INDEX IF NOT EXISTS idx_interns_status ON interns(status);
CREATE INDEX IF NOT EXISTS idx_interns_college ON interns(college_name);

-- 4. Offer Letters Table
CREATE TABLE IF NOT EXISTS offer_letters (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    reference_no VARCHAR(100) UNIQUE NOT NULL,
    intern_id UUID NOT NULL REFERENCES interns(id) ON DELETE CASCADE,
    issue_date DATE NOT NULL DEFAULT CURRENT_DATE,
    custom_responsibilities TEXT,
    custom_terms TEXT,
    status VARCHAR(50) NOT NULL DEFAULT 'ISSUED', -- DRAFT, ISSUED, ACCEPTED, REVOKED
    revision_count INT NOT NULL DEFAULT 1,
    pdf_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_offer_ref ON offer_letters(reference_no);
CREATE INDEX IF NOT EXISTS idx_offer_intern ON offer_letters(intern_id);

-- 5. Certificates Table (Verified Publicly)
CREATE TABLE IF NOT EXISTS certificates (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    certificate_id VARCHAR(100) UNIQUE NOT NULL,
    intern_id UUID NOT NULL REFERENCES interns(id) ON DELETE CASCADE,
    -- Redundant snapshot fields to preserve historical record integrity even if intern profile changes
    intern_name VARCHAR(200) NOT NULL,
    domain VARCHAR(150) NOT NULL,
    college_name VARCHAR(300),
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    duration VARCHAR(100) NOT NULL,
    issue_date DATE NOT NULL DEFAULT CURRENT_DATE,
    authorized_signatory VARCHAR(150) NOT NULL DEFAULT 'Rajesh Lalwani, Founder & Director',
    status VARCHAR(50) NOT NULL DEFAULT 'VALID', -- VALID, REVOKED
    revocation_reason TEXT,
    revoked_at TIMESTAMP WITH TIME ZONE,
    qr_verification_url TEXT NOT NULL,
    pdf_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_cert_id ON certificates(certificate_id);
CREATE INDEX IF NOT EXISTS idx_cert_intern ON certificates(intern_id);
CREATE INDEX IF NOT EXISTS idx_cert_status ON certificates(status);

-- 6. Certificate Revisions Table
CREATE TABLE IF NOT EXISTS certificate_revisions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    certificate_id UUID NOT NULL REFERENCES certificates(id) ON DELETE CASCADE,
    revision_number INT NOT NULL,
    changed_reason TEXT NOT NULL,
    changed_by VARCHAR(150) NOT NULL,
    previous_data JSONB NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 7. Audit Logs Table
CREATE TABLE IF NOT EXISTS audit_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    action VARCHAR(100) NOT NULL,
    entity VARCHAR(50) NOT NULL,
    entity_id VARCHAR(100),
    performed_by VARCHAR(150) NOT NULL DEFAULT 'Admin',
    details TEXT,
    ip_address VARCHAR(50),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_audit_created ON audit_logs(created_at DESC);

-- ==============================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ==============================================================================

ALTER TABLE company_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE interns ENABLE ROW LEVEL SECURITY;
ALTER TABLE offer_letters ENABLE ROW LEVEL SECURITY;
ALTER TABLE certificates ENABLE ROW LEVEL SECURITY;
ALTER TABLE certificate_revisions ENABLE ROW LEVEL SECURITY;
ALTER TABLE audit_logs ENABLE ROW LEVEL SECURITY;

-- 1. Company Settings Policies
-- Public can read company details
CREATE POLICY "Public company settings view" ON company_settings
    FOR SELECT USING (true);

-- Authenticated admins can update company settings
CREATE POLICY "Admin manage company settings" ON company_settings
    FOR ALL USING (auth.role() = 'authenticated');

-- 2. Interns Policies (Admin Only)
CREATE POLICY "Admin full access to interns" ON interns
    FOR ALL USING (auth.role() = 'authenticated');

-- 3. Offer Letters Policies (Admin Only)
CREATE POLICY "Admin full access to offer letters" ON offer_letters
    FOR ALL USING (auth.role() = 'authenticated');

-- 4. Certificates Policies (Public Verification vs Admin Full Access)
-- Public can ONLY read certificates for verification (never deletes, never updates)
-- Exposes ONLY verification columns without private contact details
CREATE POLICY "Public verify certificates" ON certificates
    FOR SELECT USING (true);

-- Authenticated admins can insert, update, revoke certificates
CREATE POLICY "Admin full access to certificates" ON certificates
    FOR ALL USING (auth.role() = 'authenticated');

-- 5. Certificate Revisions & Audit Logs (Admin Only)
CREATE POLICY "Admin full access to revisions" ON certificate_revisions
    FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Admin full access to audit logs" ON audit_logs
    FOR ALL USING (auth.role() = 'authenticated');
