// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MinusSquareBulkSvg from '@ant-design/icons-svg/lib/asn/MinusSquareBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MinusSquareBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MinusSquareBulk: MinusSquareBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MinusSquareBulkSvg}></AntdIcon>;
};

MinusSquareBulk.displayName = 'MinusSquareBulk';
MinusSquareBulk.inheritAttrs = false;
export default MinusSquareBulk;