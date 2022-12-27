// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Menu1BulkSvg from '@ant-design/icons-svg/lib/asn/Menu1Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Menu1BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Menu1Bulk: Menu1BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Menu1BulkSvg}></AntdIcon>;
};

Menu1Bulk.displayName = 'Menu1Bulk';
Menu1Bulk.inheritAttrs = false;
export default Menu1Bulk;