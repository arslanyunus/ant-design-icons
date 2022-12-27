// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrangeSquare2TwoToneSvg from '@ant-design/icons-svg/lib/asn/ArrangeSquare2TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrangeSquare2TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrangeSquare2TwoTone: ArrangeSquare2TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrangeSquare2TwoToneSvg}></AntdIcon>;
};

ArrangeSquare2TwoTone.displayName = 'ArrangeSquare2TwoTone';
ArrangeSquare2TwoTone.inheritAttrs = false;
export default ArrangeSquare2TwoTone;