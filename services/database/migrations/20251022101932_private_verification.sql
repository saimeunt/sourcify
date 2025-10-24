-- migrate:up

ALTER TABLE verified_contracts ADD COLUMN private_verification BOOLEAN NOT NULL DEFAULT FALSE;
ALTER TABLE verified_contracts ADD COLUMN verified_by UUID;

-- migrate:down

ALTER TABLE verified_contracts DROP COLUMN IF EXISTS private_verification;
ALTER TABLE verified_contracts DROP COLUMN IF EXISTS verified_by;
