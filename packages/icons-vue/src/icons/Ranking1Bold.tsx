// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Ranking1BoldSvg from '@ant-design/icons-svg/lib/asn/Ranking1Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Ranking1BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Ranking1Bold: Ranking1BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Ranking1BoldSvg}></AntdIcon>;
};

Ranking1Bold.displayName = 'Ranking1Bold';
Ranking1Bold.inheritAttrs = false;
export default Ranking1Bold;