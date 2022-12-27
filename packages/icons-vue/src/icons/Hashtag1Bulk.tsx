// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Hashtag1BulkSvg from '@ant-design/icons-svg/lib/asn/Hashtag1Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Hashtag1BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Hashtag1Bulk: Hashtag1BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Hashtag1BulkSvg}></AntdIcon>;
};

Hashtag1Bulk.displayName = 'Hashtag1Bulk';
Hashtag1Bulk.inheritAttrs = false;
export default Hashtag1Bulk;