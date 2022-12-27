// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WifiBrokenSvg from '@ant-design/icons-svg/lib/asn/WifiBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WifiBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WifiBroken: WifiBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WifiBrokenSvg}></AntdIcon>;
};

WifiBroken.displayName = 'WifiBroken';
WifiBroken.inheritAttrs = false;
export default WifiBroken;