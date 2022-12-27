// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BackwardTwoToneSvg from '@ant-design/icons-svg/lib/asn/BackwardTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BackwardTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BackwardTwoTone: BackwardTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BackwardTwoToneSvg}></AntdIcon>;
};

BackwardTwoTone.displayName = 'BackwardTwoTone';
BackwardTwoTone.inheritAttrs = false;
export default BackwardTwoTone;