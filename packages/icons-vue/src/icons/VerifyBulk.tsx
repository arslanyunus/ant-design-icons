// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VerifyBulkSvg from '@ant-design/icons-svg/lib/asn/VerifyBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VerifyBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VerifyBulk: VerifyBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VerifyBulkSvg}></AntdIcon>;
};

VerifyBulk.displayName = 'VerifyBulk';
VerifyBulk.inheritAttrs = false;
export default VerifyBulk;