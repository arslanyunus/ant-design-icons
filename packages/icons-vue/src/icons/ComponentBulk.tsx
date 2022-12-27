// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ComponentBulkSvg from '@ant-design/icons-svg/lib/asn/ComponentBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ComponentBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ComponentBulk: ComponentBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ComponentBulkSvg}></AntdIcon>;
};

ComponentBulk.displayName = 'ComponentBulk';
ComponentBulk.inheritAttrs = false;
export default ComponentBulk;