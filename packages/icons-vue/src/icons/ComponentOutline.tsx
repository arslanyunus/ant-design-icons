// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ComponentOutlineSvg from '@ant-design/icons-svg/lib/asn/ComponentOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ComponentOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ComponentOutline: ComponentOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ComponentOutlineSvg}></AntdIcon>;
};

ComponentOutline.displayName = 'ComponentOutline';
ComponentOutline.inheritAttrs = false;
export default ComponentOutline;