// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HomeTrendDownOutlineSvg from '@ant-design/icons-svg/lib/asn/HomeTrendDownOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HomeTrendDownOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HomeTrendDownOutline: HomeTrendDownOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HomeTrendDownOutlineSvg}></AntdIcon>;
};

HomeTrendDownOutline.displayName = 'HomeTrendDownOutline';
HomeTrendDownOutline.inheritAttrs = false;
export default HomeTrendDownOutline;