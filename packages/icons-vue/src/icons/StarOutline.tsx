// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import StarOutlineSvg from '@ant-design/icons-svg/lib/asn/StarOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface StarOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const StarOutline: StarOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StarOutlineSvg}></AntdIcon>;
};

StarOutline.displayName = 'StarOutline';
StarOutline.inheritAttrs = false;
export default StarOutline;