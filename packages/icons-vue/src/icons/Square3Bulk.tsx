// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Square3BulkSvg from '@ant-design/icons-svg/lib/asn/Square3Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Square3BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Square3Bulk: Square3BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Square3BulkSvg}></AntdIcon>;
};

Square3Bulk.displayName = 'Square3Bulk';
Square3Bulk.inheritAttrs = false;
export default Square3Bulk;