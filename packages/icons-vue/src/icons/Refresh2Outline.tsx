// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Refresh2OutlineSvg from '@ant-design/icons-svg/lib/asn/Refresh2Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Refresh2OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Refresh2Outline: Refresh2OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Refresh2OutlineSvg}></AntdIcon>;
};

Refresh2Outline.displayName = 'Refresh2Outline';
Refresh2Outline.inheritAttrs = false;
export default Refresh2Outline;