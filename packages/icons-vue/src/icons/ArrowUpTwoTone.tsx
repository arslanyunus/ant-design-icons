// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowUpTwoToneSvg from '@ant-design/icons-svg/lib/asn/ArrowUpTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowUpTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowUpTwoTone: ArrowUpTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowUpTwoToneSvg}></AntdIcon>;
};

ArrowUpTwoTone.displayName = 'ArrowUpTwoTone';
ArrowUpTwoTone.inheritAttrs = false;
export default ArrowUpTwoTone;