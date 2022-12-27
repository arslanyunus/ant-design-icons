// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowSwapHorizontalTwoToneSvg from '@ant-design/icons-svg/lib/asn/ArrowSwapHorizontalTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowSwapHorizontalTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowSwapHorizontalTwoTone: ArrowSwapHorizontalTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowSwapHorizontalTwoToneSvg}></AntdIcon>;
};

ArrowSwapHorizontalTwoTone.displayName = 'ArrowSwapHorizontalTwoTone';
ArrowSwapHorizontalTwoTone.inheritAttrs = false;
export default ArrowSwapHorizontalTwoTone;