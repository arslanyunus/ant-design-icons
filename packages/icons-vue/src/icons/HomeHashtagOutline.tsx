// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HomeHashtagOutlineSvg from '@ant-design/icons-svg/lib/asn/HomeHashtagOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HomeHashtagOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HomeHashtagOutline: HomeHashtagOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HomeHashtagOutlineSvg}></AntdIcon>;
};

HomeHashtagOutline.displayName = 'HomeHashtagOutline';
HomeHashtagOutline.inheritAttrs = false;
export default HomeHashtagOutline;