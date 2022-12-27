// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Ranking1BrokenSvg from '@ant-design/icons-svg/lib/asn/Ranking1Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Ranking1BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Ranking1Broken: Ranking1BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Ranking1BrokenSvg}></AntdIcon>;
};

Ranking1Broken.displayName = 'Ranking1Broken';
Ranking1Broken.inheritAttrs = false;
export default Ranking1Broken;