// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ConvertshapeBulkSvg from '@ant-design/icons-svg/lib/asn/ConvertshapeBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ConvertshapeBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ConvertshapeBulk: ConvertshapeBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ConvertshapeBulkSvg}></AntdIcon>;
};

ConvertshapeBulk.displayName = 'ConvertshapeBulk';
ConvertshapeBulk.inheritAttrs = false;
export default ConvertshapeBulk;