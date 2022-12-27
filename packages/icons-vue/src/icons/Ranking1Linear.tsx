// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Ranking1LinearSvg from '@ant-design/icons-svg/lib/asn/Ranking1Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Ranking1LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Ranking1Linear: Ranking1LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Ranking1LinearSvg}></AntdIcon>;
};

Ranking1Linear.displayName = 'Ranking1Linear';
Ranking1Linear.inheritAttrs = false;
export default Ranking1Linear;