// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HeartCircleOutlineSvg from '@ant-design/icons-svg/lib/asn/HeartCircleOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HeartCircleOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HeartCircleOutline: HeartCircleOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HeartCircleOutlineSvg}></AntdIcon>;
};

HeartCircleOutline.displayName = 'HeartCircleOutline';
HeartCircleOutline.inheritAttrs = false;
export default HeartCircleOutline;