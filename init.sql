CREATE TABLE IF NOT EXISTS payment_cards (
    id SERIAL PRIMARY KEY,
    client_id VARCHAR(255) NOT NULL,
    card_brand VARCHAR(50),
    card_last4 CHAR(4),
    expires CHAR(5),
    has_chip BOOLEAN,
    num_cards_issued INT,
    credit_limit NUMERIC(15,2),
    token VARCHAR(255) UNIQUE
);

CREATE INDEX IF NOT EXISTS idx_client ON payment_cards(client_id);