// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowRight3TwoToneSvg from '@ant-design/icons-svg/lib/asn/ArrowRight3TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowRight3TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowRight3TwoTone: ArrowRight3TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowRight3TwoToneSvg}></AntdIcon>;
};

ArrowRight3TwoTone.displayName = 'ArrowRight3TwoTone';
ArrowRight3TwoTone.inheritAttrs = false;
export default ArrowRight3TwoTone;