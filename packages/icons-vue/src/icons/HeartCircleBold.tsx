// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HeartCircleBoldSvg from '@ant-design/icons-svg/lib/asn/HeartCircleBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HeartCircleBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HeartCircleBold: HeartCircleBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HeartCircleBoldSvg}></AntdIcon>;
};

HeartCircleBold.displayName = 'HeartCircleBold';
HeartCircleBold.inheritAttrs = false;
export default HeartCircleBold;