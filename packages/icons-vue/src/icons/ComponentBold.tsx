// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ComponentBoldSvg from '@ant-design/icons-svg/lib/asn/ComponentBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ComponentBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ComponentBold: ComponentBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ComponentBoldSvg}></AntdIcon>;
};

ComponentBold.displayName = 'ComponentBold';
ComponentBold.inheritAttrs = false;
export default ComponentBold;