// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowCircleRightTwoToneSvg from '@ant-design/icons-svg/lib/asn/ArrowCircleRightTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowCircleRightTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowCircleRightTwoTone: ArrowCircleRightTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowCircleRightTwoToneSvg}></AntdIcon>;
};

ArrowCircleRightTwoTone.displayName = 'ArrowCircleRightTwoTone';
ArrowCircleRightTwoTone.inheritAttrs = false;
export default ArrowCircleRightTwoTone;