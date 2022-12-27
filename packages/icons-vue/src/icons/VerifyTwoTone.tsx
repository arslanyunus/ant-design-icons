// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VerifyTwoToneSvg from '@ant-design/icons-svg/lib/asn/VerifyTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VerifyTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VerifyTwoTone: VerifyTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VerifyTwoToneSvg}></AntdIcon>;
};

VerifyTwoTone.displayName = 'VerifyTwoTone';
VerifyTwoTone.inheritAttrs = false;
export default VerifyTwoTone;