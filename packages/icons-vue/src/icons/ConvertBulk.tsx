// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ConvertBulkSvg from '@ant-design/icons-svg/lib/asn/ConvertBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ConvertBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ConvertBulk: ConvertBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ConvertBulkSvg}></AntdIcon>;
};

ConvertBulk.displayName = 'ConvertBulk';
ConvertBulk.inheritAttrs = false;
export default ConvertBulk;