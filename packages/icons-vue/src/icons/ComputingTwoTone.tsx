// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ComputingTwoToneSvg from '@ant-design/icons-svg/lib/asn/ComputingTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ComputingTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ComputingTwoTone: ComputingTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ComputingTwoToneSvg}></AntdIcon>;
};

ComputingTwoTone.displayName = 'ComputingTwoTone';
ComputingTwoTone.inheritAttrs = false;
export default ComputingTwoTone;