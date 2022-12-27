// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MinusBulkSvg from '@ant-design/icons-svg/lib/asn/MinusBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MinusBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MinusBulk: MinusBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MinusBulkSvg}></AntdIcon>;
};

MinusBulk.displayName = 'MinusBulk';
MinusBulk.inheritAttrs = false;
export default MinusBulk;