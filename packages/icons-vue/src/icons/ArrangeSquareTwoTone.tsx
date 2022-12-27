// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrangeSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/ArrangeSquareTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrangeSquareTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrangeSquareTwoTone: ArrangeSquareTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrangeSquareTwoToneSvg}></AntdIcon>;
};

ArrangeSquareTwoTone.displayName = 'ArrangeSquareTwoTone';
ArrangeSquareTwoTone.inheritAttrs = false;
export default ArrangeSquareTwoTone;