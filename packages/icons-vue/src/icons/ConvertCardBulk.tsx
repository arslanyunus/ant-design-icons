// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ConvertCardBulkSvg from '@ant-design/icons-svg/lib/asn/ConvertCardBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ConvertCardBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ConvertCardBulk: ConvertCardBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ConvertCardBulkSvg}></AntdIcon>;
};

ConvertCardBulk.displayName = 'ConvertCardBulk';
ConvertCardBulk.inheritAttrs = false;
export default ConvertCardBulk;