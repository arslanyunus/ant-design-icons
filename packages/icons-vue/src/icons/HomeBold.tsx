// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HomeBoldSvg from '@ant-design/icons-svg/lib/asn/HomeBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HomeBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HomeBold: HomeBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HomeBoldSvg}></AntdIcon>;
};

HomeBold.displayName = 'HomeBold';
HomeBold.inheritAttrs = false;
export default HomeBold;