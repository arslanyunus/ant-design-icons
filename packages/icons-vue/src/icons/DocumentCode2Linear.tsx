// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentCode2LinearSvg from '@ant-design/icons-svg/lib/asn/DocumentCode2Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentCode2LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentCode2Linear: DocumentCode2LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentCode2LinearSvg}></AntdIcon>;
};

DocumentCode2Linear.displayName = 'DocumentCode2Linear';
DocumentCode2Linear.inheritAttrs = false;
export default DocumentCode2Linear;