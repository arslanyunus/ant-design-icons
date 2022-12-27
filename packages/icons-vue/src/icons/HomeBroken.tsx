// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HomeBrokenSvg from '@ant-design/icons-svg/lib/asn/HomeBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HomeBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HomeBroken: HomeBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HomeBrokenSvg}></AntdIcon>;
};

HomeBroken.displayName = 'HomeBroken';
HomeBroken.inheritAttrs = false;
export default HomeBroken;