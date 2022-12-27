// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrangeCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/ArrangeCircleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrangeCircleTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrangeCircleTwoTone: ArrangeCircleTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrangeCircleTwoToneSvg}></AntdIcon>;
};

ArrangeCircleTwoTone.displayName = 'ArrangeCircleTwoTone';
ArrangeCircleTwoTone.inheritAttrs = false;
export default ArrangeCircleTwoTone;