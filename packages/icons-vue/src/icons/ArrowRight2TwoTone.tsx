// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowRight2TwoToneSvg from '@ant-design/icons-svg/lib/asn/ArrowRight2TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowRight2TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowRight2TwoTone: ArrowRight2TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowRight2TwoToneSvg}></AntdIcon>;
};

ArrowRight2TwoTone.displayName = 'ArrowRight2TwoTone';
ArrowRight2TwoTone.inheritAttrs = false;
export default ArrowRight2TwoTone;