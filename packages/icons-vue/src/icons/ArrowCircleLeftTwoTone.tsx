// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowCircleLeftTwoToneSvg from '@ant-design/icons-svg/lib/asn/ArrowCircleLeftTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowCircleLeftTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowCircleLeftTwoTone: ArrowCircleLeftTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowCircleLeftTwoToneSvg}></AntdIcon>;
};

ArrowCircleLeftTwoTone.displayName = 'ArrowCircleLeftTwoTone';
ArrowCircleLeftTwoTone.inheritAttrs = false;
export default ArrowCircleLeftTwoTone;