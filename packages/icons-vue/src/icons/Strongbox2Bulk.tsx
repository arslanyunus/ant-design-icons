// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Strongbox2BulkSvg from '@ant-design/icons-svg/lib/asn/Strongbox2Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Strongbox2BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Strongbox2Bulk: Strongbox2BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Strongbox2BulkSvg}></AntdIcon>;
};

Strongbox2Bulk.displayName = 'Strongbox2Bulk';
Strongbox2Bulk.inheritAttrs = false;
export default Strongbox2Bulk;