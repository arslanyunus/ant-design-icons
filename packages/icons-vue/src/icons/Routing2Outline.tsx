// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Routing2OutlineSvg from '@ant-design/icons-svg/lib/asn/Routing2Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Routing2OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Routing2Outline: Routing2OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Routing2OutlineSvg}></AntdIcon>;
};

Routing2Outline.displayName = 'Routing2Outline';
Routing2Outline.inheritAttrs = false;
export default Routing2Outline;