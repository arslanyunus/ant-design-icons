// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MinusCirlceBulkSvg from '@ant-design/icons-svg/lib/asn/MinusCirlceBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MinusCirlceBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MinusCirlceBulk: MinusCirlceBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MinusCirlceBulkSvg}></AntdIcon>;
};

MinusCirlceBulk.displayName = 'MinusCirlceBulk';
MinusCirlceBulk.inheritAttrs = false;
export default MinusCirlceBulk;