// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Ranking1OutlineSvg from '@ant-design/icons-svg/lib/asn/Ranking1Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Ranking1OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Ranking1Outline: Ranking1OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Ranking1OutlineSvg}></AntdIcon>;
};

Ranking1Outline.displayName = 'Ranking1Outline';
Ranking1Outline.inheritAttrs = false;
export default Ranking1Outline;