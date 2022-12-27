// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrangeCircle2TwoToneSvg from '@ant-design/icons-svg/lib/asn/ArrangeCircle2TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrangeCircle2TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrangeCircle2TwoTone: ArrangeCircle2TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrangeCircle2TwoToneSvg}></AntdIcon>;
};

ArrangeCircle2TwoTone.displayName = 'ArrangeCircle2TwoTone';
ArrangeCircle2TwoTone.inheritAttrs = false;
export default ArrangeCircle2TwoTone;