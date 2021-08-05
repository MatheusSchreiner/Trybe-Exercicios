### 1. 
~~~
USE betrybe_automoveis;
DELIMITER $$

CREATE TRIGGER trigger_carro_insert
    BEFORE INSERT ON carros
    FOR EACH ROW
BEGIN
    SET NEW.data_atualizacao = NOW(),
        NEW.acao = 'INSERÇÃO',
        NEW.disponivel_em_estoque = 1;
END $$

DELIMITER ;
~~~
<br>

### 2. 
~~~
USE betrybe_automoveis;
DELIMITER $$

CREATE TRIGGER trigger_carro_update
    BEFORE UPDATE ON carros
    FOR EACH ROW
BEGIN
    SET NEW.data_atualizacao = NOW(),
        NEW.acao = 'ATUALIZAÇÃO';
END $$

DELIMITER ;
~~~
<br>

### 3. 
~~~
USE betrybe_automoveis;
DELIMITER $$

CREATE TRIGGER trigger_perfil_delete
    AFTER DELETE ON carros
    FOR EACH ROW
BEGIN
    INSERT INTO log_operacoes(tipo_operacao, data_ocorrido)
    VALUES ('EXCLUSÃO', NOW());
END $$

DELIMITER ;
~~~
<br>
