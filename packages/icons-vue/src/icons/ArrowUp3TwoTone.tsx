// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowUp3TwoToneSvg from '@ant-design/icons-svg/lib/asn/ArrowUp3TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowUp3TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowUp3TwoTone: ArrowUp3TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowUp3TwoToneSvg}></AntdIcon>;
};

ArrowUp3TwoTone.displayName = 'ArrowUp3TwoTone';
ArrowUp3TwoTone.inheritAttrs = false;
export default ArrowUp3TwoTone;