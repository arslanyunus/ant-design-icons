// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HomeOutlineSvg from '@ant-design/icons-svg/lib/asn/HomeOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HomeOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HomeOutline: HomeOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HomeOutlineSvg}></AntdIcon>;
};

HomeOutline.displayName = 'HomeOutline';
HomeOutline.inheritAttrs = false;
export default HomeOutline;