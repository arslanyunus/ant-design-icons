// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VerifyBrokenSvg from '@ant-design/icons-svg/lib/asn/VerifyBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VerifyBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VerifyBroken: VerifyBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VerifyBrokenSvg}></AntdIcon>;
};

VerifyBroken.displayName = 'VerifyBroken';
VerifyBroken.inheritAttrs = false;
export default VerifyBroken;