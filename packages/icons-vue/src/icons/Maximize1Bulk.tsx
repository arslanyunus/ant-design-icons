// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Maximize1BulkSvg from '@ant-design/icons-svg/lib/asn/Maximize1Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Maximize1BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Maximize1Bulk: Maximize1BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Maximize1BulkSvg}></AntdIcon>;
};

Maximize1Bulk.displayName = 'Maximize1Bulk';
Maximize1Bulk.inheritAttrs = false;
export default Maximize1Bulk;