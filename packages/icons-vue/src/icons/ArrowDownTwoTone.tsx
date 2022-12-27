// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowDownTwoToneSvg from '@ant-design/icons-svg/lib/asn/ArrowDownTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowDownTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowDownTwoTone: ArrowDownTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowDownTwoToneSvg}></AntdIcon>;
};

ArrowDownTwoTone.displayName = 'ArrowDownTwoTone';
ArrowDownTwoTone.inheritAttrs = false;
export default ArrowDownTwoTone;