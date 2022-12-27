// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VerifyBoldSvg from '@ant-design/icons-svg/lib/asn/VerifyBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VerifyBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VerifyBold: VerifyBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VerifyBoldSvg}></AntdIcon>;
};

VerifyBold.displayName = 'VerifyBold';
VerifyBold.inheritAttrs = false;
export default VerifyBold;