
import { TezosToolkit } from '@taquito/taquito';
import { tas } from '../types-file/type-aliases';
import { ExampleContract0ContractType as ContractType } from '../types-file/example-contract-8.types';

describe('example-contract-8', () => {
    const Tezos = new TezosToolkit('RPC_URL');
    let contract: ContractType = undefined as unknown as ContractType;
    beforeAll(async () => {
            contract = await Tezos.contract.at<ContractType>('DEPLOYED_CONTRACT_ADDRESS');
    });


    it('should call make', async () => {
        
        const makeRequest = await contract.methodsObject.make({
                id: tas.nat('42'),
                p1: tas.address('tz1ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456'),
                fee: tas.mutez('42'),
                otherFee?: tas.mutez('42'),
            }).send();
        await makeRequest.confirmation(3);
        
    });

    it('should call join', async () => {
        
        const joinRequest = await contract.methodsObject.join(tas.nat('42')).send();
        await joinRequest.confirmation(3);
        
    });

    it('should call register2', async () => {
        
        const register2Request = await contract.methodsObject.register2({
                id: tas.nat('42'),
                p2: tas.address('tz1ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456'),
            }).send();
        await register2Request.confirmation(3);
        
    });

    it('should call accept', async () => {
        
        const acceptRequest = await contract.methodsObject.accept({
                id: tas.nat('42'),
                result: (
                    { result1: undefined }
                    | { result2: undefined }
                    | { ok: undefined }
                ),
            }).send();
        await acceptRequest.confirmation(3);
        
    });

    it('should call cancel', async () => {
        
        const cancelRequest = await contract.methodsObject.cancel(tas.nat('42')).send();
        await cancelRequest.confirmation(3);
        
    });

    it('should call setAuth', async () => {
        
        const setAuthRequest = await contract.methodsObject.setAuth(tas.address('tz1ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456')).send();
        await setAuthRequest.confirmation(3);
        
    });

    it('should call confirmAuth', async () => {
        
        const confirmAuthRequest = await contract.methodsObject.confirmAuth().send();
        await confirmAuthRequest.confirmation(3);
        
    });

    it('should call setCollector', async () => {
        
        const setCollectorRequest = await contract.methodsObject.setCollector(tas.address('tz1ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456')).send();
        await setCollectorRequest.confirmation(3);
        
    });

    it('should call free', async () => {
        
        const freeRequest = await contract.methodsObject.free().send();
        await freeRequest.confirmation(3);
        
    });

});
